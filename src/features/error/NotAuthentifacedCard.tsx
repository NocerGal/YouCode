'use client'; // Error components must be Client Components

import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LogginButton } from '@/features/auth/LogginButton';
import { useEffect } from 'react';

export default function NotAuthentificatedCard({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card className="m-auto mt-4 max-w-lg">
      <CardHeader>
        <CardTitle>You need to be logged in to view this page</CardTitle>
      </CardHeader>
      <CardFooter>
        <LogginButton />
      </CardFooter>
    </Card>
  );
}
