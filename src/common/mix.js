export const itemListenerMixin = {
    data() {
        return {
            itemListener: () => {},
            refresh: null,
        }
    },
    mounted() {
        //重新计算滑动高度 调用防抖
        this.refresh = this.debounce(this.$refs.Scroll.refresh, 200);
        this.itemListener = () => {
            // console.log(1);
            this.refresh()
        }
        this.$bus.$on('imageload', this.itemListener);
    },
    methods: {
        debounce(func, delay) {
            let tiems = null;
            return function () {
                if (tiems) clearTimeout(tiems);
                tiems = setTimeout(() => {
                    func.call(this);
                }, delay);
            };
        },
    }
}
import backTop from '@/components/content/backtop/BackTop';

export const BackTop = {
    data() {
        return {
            isShowBackTop: false,

        }
    },
    components: {
        backTop,
    },
    methods: {
        backClick() {
            this.$refs.Scroll.scrollto(0, 0);
        },
        backTop(position) {
            this.isShowBackTop = -position.y > 700;
        }
    }
}