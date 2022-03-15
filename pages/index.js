import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import * as qs from 'qs';

export default function Home() {

    const token = 'xoxp-3237178949925-3233422668694-3225621639767-4c12d262a9c587f8031a6d6e7b963a37';
    const url = 'https://slack.com/api/users.list';

    let cursor = '';
    const result = axios.request({
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url,
        method: "POST",
        data: qs.stringify({
            cursor,
        })
    });

    console.log(result.data);
    // cursor = result.data.response_metadata.next_cursor;

        
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Slack API TEST" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="description">
          Next starter from Netfly. Try.
        </p>
      </main>

      <Footer />
    </div>
  )
}
