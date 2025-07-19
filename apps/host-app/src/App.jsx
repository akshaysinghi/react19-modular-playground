import React, { Suspense } from "react";

const AppAuth = React.lazy(() => import("auth/App"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppAuth />
    </Suspense>
  );
}
