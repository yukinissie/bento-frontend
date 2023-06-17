<template>
    <div>
        <nav class="relative">
            <button role="button" @click="openMenu(!isMenuOpen)">
                <UserCard iconPath="" username="hoge" />
            </button>
            <ul v-if="isMenuOpen" class="absolute w-32 border-2 bg-white">
                <li>
                    <a href="/home">ホーム</a>
                </li>
                <li>
                    <a href="/group">グループ</a>
                </li>
                <li>
                    <a href="/notification">通知</a>
                </li>
                <li>
                    <a href="/profile">プロフィール</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import UserCard from "../UserCard/UserCard.vue";
import { ref } from "vue";
import type UserCardVue from "../UserCard/UserCard.vue";

const isMenuOpen = ref<boolean>(false);

const openMenu = (action: boolean) => {
    isMenuOpen.value = action;
};
</script>
