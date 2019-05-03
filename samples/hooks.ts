import { useEffect } from 'react';

export function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  });
}

export function MyComponent2() {
  useEffect(() => {
    const local = {};
    console.log(local);
  }, []);
}

export function MyComponent3() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, [local]);
}

// export function MyComponent4() {
//   useEffect(() => {
//     console.log(props.foo);
//   }, []);
// }

export function MyComponent5() {
  const local1 = {};
  {
    const local2 = {};
    useEffect(() => {
      console.log(local1);
      console.log(local2);
    });
  }
}

export function MyComponent6() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, [, , , local, , ,]);
}

export function MyComponent7({ foo }) {
  useEffect(() => {
    console.log(foo.length);
  }, [foo]);
}

export function MyComponent8(props) {
  // const local = {};
  useEffect(() => {
    console.log(props.foo);
    console.log(props.bar);
  }, [props, props.foo]);
  let color = {};
  useEffect(() => {
    console.log(props.foo.bar.baz);
    console.log(color);
  }, [props.foo, props.foo.bar.baz, color]);
}

// export function MyComponent9() {
//   const local1 = {};
//   const local2 = {};
//   useMemo(() => {
//     console.log(local1);
//   }, [local1, local2]);
// }
