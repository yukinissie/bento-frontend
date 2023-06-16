<template>
    <div class="user-profile">
        <img :src="iconPath" class="user-icon" alt="User Icon" />
        <span class="user-name">{{ username }}</span>
    </div>
</template>

<script>
export default {
    props: {
        iconPath: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
.user-profile {
    display: flex;
    align-items: center;
}

.user-icon {
    outline: 3px solid rgba(0, 0, 0, 0.3);
    outline-offset: -3px;
    box-sizing: border-box;
    border-radius: 999px;
    flex: none;
    order: 0;
    flex-grow: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}

.user-name {
    font-size: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
}
</style>
