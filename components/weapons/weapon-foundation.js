export const foundationProps = {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};

export const foundationComputed = {
  humanDisabled() {
    return this.disabled ? 'is disabled' : 'is on';
  },
};
