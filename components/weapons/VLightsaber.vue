<template>
  <div>{{ description }}</div>
</template>

<script>
import { foundationComputed, foundationProps } from './weapon-foundation';

const { humanDisabled } = foundationComputed;
const { disabled } = foundationProps;

export default {
  props: {
    color: {
      type: String,
      default: 'red',
    },
    disabled,
  },
  computed: {
    humanDisabled,
    description() {
      return `bright ${this.color} lightsaber ${this.humanDisabled}`;
    },
  },
};
</script>
