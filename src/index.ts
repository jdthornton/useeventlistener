import { useEffect } from 'react';
import useCallbackRef from '@jdthornton/usecallbackref';

type AnyEvent = MouseEvent | TouchEvent | KeyboardEvent
type CallbackType = (e: AnyEvent) => void

export default function useEventListener(
  eventName: string | null,
  handler: CallbackType = () => {},
  element: any = typeof window !== "undefined" ? window : {}
) {

  const savedCallback = useCallbackRef(handler)

  useEffect(() => {
    const eventListener = (e: AnyEvent) => {
      if(savedCallback.current){
        savedCallback.current(e)
      }
    }
    if(eventName !== null && element && element.addEventListener){
      element.addEventListener(eventName, eventListener);
      return () => element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element]);
}
