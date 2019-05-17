const mixin = {
    computed: {
        questions() {
            return this.$store.state.questions;
        }
    }
}
export default mixin