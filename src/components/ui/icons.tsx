import type { SVGProps } from "react";

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return <svg width="64" height="64" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...props}><path d="m32 0 5.5 20.1L54.6 9.4 43.9 26.5 64 32l-20.1 5.5 10.7 17.1-17.1-10.7L32 64l-5.5-20.1L9.4 54.6l10.7-17.1L0 32l20.1-5.5L9.4 9.4l17.1 10.7L32 0Z" /></svg>;
}

export function CheckIcon() {
  return <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" /><path d="m6 10 2.5 2.5L14 7" stroke="currentColor" strokeWidth="1.3" /></svg>;
}
