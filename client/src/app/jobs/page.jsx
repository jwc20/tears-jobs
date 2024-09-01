import Link from 'next/link'
import { fetchData } from '@/api/data'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/table'
import moment from 'moment-timezone'

export const metadata = {
  title: 'Jobs'
}

export default async function Jobs ({ searchParams }) {
  const currentPage = parseInt(searchParams.page) || 1
  const data = await fetchData(`api/v0/job_listings?page=${currentPage}`)
  const jobs = data['data']
  const totalPages = Math.ceil(data['count'] / 10)

  return (
    <>
      <style>
        {`
            .max-width-column {
                max-width: 200px; /* Adjust the width as needed */
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}
      </style>

      <div className='flex items-end justify-between gap-4'>
        <Heading>Jobs</Heading>
      </div>

      <Table className='mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]'>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Company Name</TableHeader>
            <TableHeader>Job Title</TableHeader>
            <TableHeader>Scraped At</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map(job => (
            <TableRow key={job.id} href={job.job_link} title={`Job #${job.id}`}>
              <TableCell>{job.id}</TableCell>
              <TableCell className='max-width-column'>
                {job.company_name}
              </TableCell>
              <TableCell className='max-width-column'>
                {job.job_title}
              </TableCell>
              <TableCell className='text-zinc-500'>
                {moment
                  .utc(job.created_at)
                  .tz(moment.tz.guess())
                  .format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='mt-4 flex justify-between'>
        <Link href={`?page=${currentPage - 1 <= 0 ? 1 : currentPage - 1}`} passHref>
          <Button>Previous</Button>
        </Link>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Link href={`?page=${currentPage + 1 >= totalPages ? totalPages : totalPages}`} passHref>
          <Button>Next</Button>
        </Link>
      </div>
    </>
  )
}
