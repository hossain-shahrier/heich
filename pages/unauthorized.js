import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;
  return (
    <Layout title="Unauthorized Page">
      <h1 className="text-xl">Access Denied!</h1>
      {message && (
        <p className="text-gray-600 tracking-wider uppercase">
          <Link href="/login">
            <a>{message}</a>
          </Link>
        </p>
      )}
    </Layout>
  );
}
