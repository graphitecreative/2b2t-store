<template>
    <footer>
        <div class="container py-8">
            <p class="text-right font-bold text-gray-600">&copy; 2b2t {{ new Date().getFullYear() }}</p>
        </div>

        <div class="bg-gray-1000 py-8 text-gray-500">
            <div class="container">
                <div class="flex items-center gap-10 flex-wrap mb-3">
                    <a :href="`https://www.tebex.io/?utm_source=store&utm_campaign=${appConfig.storeId}`">
                        <Icon name="tebex" class="h-8" :font-controlled="false" />
                    </a>

                    <nav class="font-semibold text-sm flex gap-2 ml-auto">
                        <a href="https://checkout.tebex.io/impressum"
                            class="bg-gray-900 py-1 px-3 transition-colors hover:bg-gray-850 hover:text-white">
                            {{ $t("footer.tebex.impressum") }}
                        </a>
                        <a href="https://checkout.tebex.io/terms"
                            class="bg-gray-900 py-1 px-3 transition-colors hover:bg-gray-850 hover:text-white">
                            {{ $t("footer.tebex.tos") }}
                        </a>
                        <a href="https://checkout.tebex.io/privacy"
                            class="bg-gray-900 py-1 px-3 transition-colors hover:bg-gray-850 hover:text-white">
                            {{ $t("footer.tebex.privacy_policy") }}
                        </a>
                    </nav>
                </div>

                <p class="text-sm">
                    {{ $t("footer.tebex.description") }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
