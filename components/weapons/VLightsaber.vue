<template>
  <div>{{ description }}</div>
</template>

<script>
import { foundationComputed, foundationProps } from './weapon-foundation';

const { humanDisabled } = foundationComputed;
const { disabled } = foundationProps;

export default {
  props: {
    disabled,
    color: {
      type: String,
      default: 'red',
    },
  },
  computed: {
    humanDisabled,
    description() {
      return `bright ${this.color} lightsaber ${this.humanDisabled}`;
    },
  },
};
</script>
