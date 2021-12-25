<template>
  <div>
    <Skeleton animated :loading="true" :rows=3 :rowsWidth="['200px', '150px', '100px']">
    </Skeleton>
  </div>
</template>

<script lang="ts" setup>
import Skeleton from './../packages/skeleton/index'
import SkeletonItem from './../packages/skeleton-item/index'
</script>
