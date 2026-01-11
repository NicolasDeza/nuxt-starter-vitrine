import { reactive, ref } from "vue";
import type { ZodType } from "zod";
import type { FetchError } from "ofetch";

type UseFormOptions<T extends Record<string, unknown>> = {
  initialValues: T;
  schema: ZodType<T>;
  endpoint: string;
  getCaptchaToken?: () => string | null;
};

export function useForm<T extends Record<string, unknown>>(
  options: UseFormOptions<T>
) {
  const form = reactive({ ...options.initialValues }) as T;
  const errors = ref<Record<string, string>>({});
  const loading = ref(false);
  const success = ref(false);

  const validate = () => {
    errors.value = {};
    const result = options.schema.safeParse(form);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        errors.value[key] = issue.message;
      });
      return false;
    }

    return true;
  };

  const submit = async () => {
    if (!validate()) return;

    loading.value = true;
    success.value = false;

    try {
      const captchaToken = options.getCaptchaToken?.();

      await $fetch(options.endpoint, {
        method: "POST",
        body: {
          ...form,
          turnstileToken: captchaToken,
        },
      });

      success.value = true;
      Object.assign(form, options.initialValues);
      errors.value = {};
    } catch (error) {
      const fetchError = error as FetchError<{ message?: string }>;
      errors.value.global =
        fetchError.data?.message || "Erreur lors de l'envoi";
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    Object.assign(form, options.initialValues);
    errors.value = {};
    success.value = false;
  };

  return {
    form,
    errors,
    loading,
    success,
    submit,
    reset,
  };
}
