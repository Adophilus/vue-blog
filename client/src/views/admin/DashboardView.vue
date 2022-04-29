<template>
  <base-page>
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <div
            class="border-4 border-dashed border-gray-200 rounded-lg h-96"
          ></div>
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </base-page>
</template>

<script>
import BasePage from '@/components/admin/BasePage'

export default {
  name: 'DashboardView',
  components: { BasePage }
}
</script>
