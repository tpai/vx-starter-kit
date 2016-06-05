<template>
    <div class="container">
        <h3>{{ message }} {{ counter }}</h3>
        <button class="green" @click="handleDecrement">Decrease</button>
        <button class="blue" @click="handleIncrement">Increase</button>
        <h4 class="nose" v-if="counter < 0">Nose!</h4>
    </div>
</template>

<script>
import { increment, decrement } from 'redux/modules/counter';
import store from 'redux/store';

export default {
    data() {
        return {
            message: ': ',
            counter: this.$select('counter')
        }
    },
    methods: {
        handleIncrement() {
            store.dispatch(increment());
        },
        handleDecrement() {
            store.dispatch(decrement());
        }
    }
}
</script>

<style lang="sass" scoped>
    .container {
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        text-align: center;
    }
    h3 {
        font-size: 80px;
        font-weight: bold;
    }
    button {
        font-size: 18px;
        line-height: 24px;
        cursor: pointer;
        padding: 12px 14px;
        border: 0px;
        border-radius: 4px;
        &.green {
            color: white;
            background-color: #4fc08d;
            border-bottom: 2px solid #3aa373;
            &:hover {
                background-color: #009a61;
            }
        }
        &.blue {
            color: white;
            background-color: #4267b2;
            border-bottom: 2px solid #2B4477;
            &:hover {
                background-color: #365899;
            }
        }
    }
    .nose {
        color: red;
    }
</style>
