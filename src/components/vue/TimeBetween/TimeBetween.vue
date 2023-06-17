<template>
    <div class="flex flex-row text-[10px]">
        <span>{{ shapeStartTime() }}</span>
        ~
        <span>{{ shapeEndTime() }}</span>
    </div>
</template>
<script lang="ts">
import format from "date-fns/format";
import { parseISO } from "date-fns";

export default {
    props: {
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
    },
    methods: {
        shapeStartTime() {
            return format(parseISO(this.startTime), "yyyy/MM/dd HH:mm");
        },
        shapeEndTime() {
            return format(parseISO(this.endTime), "yyyy/MM/dd HH:mm");
        },
    },
};
// const shapeStartTime =
// const shapeEndTime = format(parseISO(endTime), "yyyy/MM/dd HH:mm");
</script>

<style></style>
