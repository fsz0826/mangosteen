import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = { x: number; y: number };
interface Options {
  onStartBefore?: (e: TouchEvent) => void;
  onStartEnd?: (e: TouchEvent) => void;
  onMoveBefore?: (e: TouchEvent) => void;
  onMoveEnd?: (e: TouchEvent) => void;
  onEndBefore?: (e: TouchEvent) => void;
  onEndEnd?: (e: TouchEvent) => void;
}
export const useSwipe = (
  element: Ref<HTMLElement | undefined>,
  options?: Options
) => {
  const start = ref<Point>();
  const end = ref<Point>();
  const isSwipe = ref(false);

  // 计算手指滑动距离
  const distance = computed(() => {
    if (!start.value || !end.value) {
      return null;
    }
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y,
    };
  });

  // 计算手指滑动方向
  const direction = computed(() => {
    if (!distance.value) {
      return "";
    }
    const { x, y } = distance.value;
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? "right" : "left";
    } else {
      return y > 0 ? "down" : "up";
    }
  });
  const onStart = (e: TouchEvent) => {
    // e.preventDefault();
    options?.onStartBefore?.(e);
    end.value = start.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    isSwipe.value = true;
    options?.onStartEnd?.(e);
  };
  const onMove = (e: TouchEvent) => {
    options?.onMoveBefore?.(e);
    if (!isSwipe.value) {
      return;
    }
    end.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    options?.onMoveEnd?.(e);
  };
  const onEnd = (e: TouchEvent) => {
    options?.onEndBefore?.(e);
    isSwipe.value = false;
    options?.onEndEnd?.(e);
  };
  onMounted(() => {
    if (!element.value) return;
    element.value.addEventListener("touchstart", onStart);
    element.value.addEventListener("touchmove", onMove);
    element.value.addEventListener("touchend", onEnd);
  });
  onUnmounted(() => {
    if (!element.value) return;
    element.value.removeEventListener("touchstart", onStart);
    element.value.removeEventListener("touchmove", onMove);
    element.value.removeEventListener("touchend", onEnd);
  });

  return {
    start,
    end,
    isSwipe,
    distance,
    direction,
  };
};
