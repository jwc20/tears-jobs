import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getRecentOrders } from '@/data'

export function Stat({ title, value, change }) {
  return (
    <div>
      <Divider />
      <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
      <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
        <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
        <span className="text-zinc-500">from last week</span>
      </div>
    </div>
  )
}

export default async function Home() {
  let orders = await getRecentOrders()

  return (
    <>
      <Heading>Good afternoon, Erica</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overview</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Total revenue" value="$2.6M" change="+4.5%" />
        <Stat title="Average order value" value="$455" change="-0.5%" />
        <Stat title="Tickets sold" value="5,888" change="+4.5%" />
        <Stat title="Pageviews" value="823,067" change="+21.2%" />
      </div>
      <Subheading className="mt-14">Recent orders</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Order number</TableHeader>
            <TableHeader>Purchase date</TableHeader>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Event</TableHeader>
            <TableHeader className="text-right">Amount</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
              <TableCell>{order.id}</TableCell>
              <TableCell className="text-zinc-500">{order.date}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar src={order.event.thumbUrl} className="size-6" />
                  <span>{order.event.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">US{order.amount.usd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}


// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Heading } from '@/components/ui/heading';
// import { Pagination } from '@/components/ui/pagination';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3013';

// export default function JobListings() {
//   const [jobListings, setJobListings] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchJobListings();
//   }, [currentPage]);

//   const fetchJobListings = async () => {
//     try {
//       const response = await fetch(`${API_URL}/api/job_listings?page=${currentPage}`);
//       const data = await response.json();
//       setJobListings(data.job_listings);
//       setTotalPages(data.total_pages);
//     } catch (error) {
//       console.error('Error fetching job listings:', error);
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true
//     });
//   };

//   return (
//     <div>
//       <Heading>Tech. Entry and Remote Jobs</Heading>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableHeader>Company Name</TableHeader>
//             <TableHeader>Job Title</TableHeader>
//             <TableHeader>Job Link</TableHeader>
//             <TableHeader>Scraped At</TableHeader>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {jobListings.map((job, index) => (
//             <TableRow key={index}>
//               <TableCell>{job.company_name}</TableCell>
//               <TableCell className="text-center">{job.job_title}</TableCell>
//               <TableCell className="text-center">
//                 <a href={job.job_link} target="_blank" rel="noopener noreferrer">Link</a>
//               </TableCell>
//               <TableCell>{formatDate(job.created_at)}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }