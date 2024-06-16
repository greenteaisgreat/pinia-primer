// the "composables" directory is the standard label in Vue for composables;
// composables in Vue are typically modules that you create to be shared
// across multiple files, so that you don't need to pollute any code spaces

// much like any Vue project, you'll need to wrap reactive data in ref()
// when you want your module data to be incorporated within other Vue files
import { ref } from 'vue';

// when using modules with a global value, anywhere that data exists
// will be changed whenever any copy of it changes
const globalCount = ref(100);
const incrementGlobalCount = () => {
  globalCount.value += 100;
};

// when scoping your modules, each copy of that piece of data
// will be its own version and will only change based on its location,
// rather than how global has all of its copies change when one changes
export function useCount() {
  const localCount = ref(50);

  const incrementLocalCount = () => {
    localCount.value += 10;
  };

  return {
    incrementGlobalCount,
    incrementLocalCount,
    globalCount,
    localCount,
  };
}
