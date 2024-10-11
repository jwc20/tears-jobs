'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/table'
import moment from 'moment-timezone'

export default function JobsTable({ jobs }) {
  return (
    <>
      <style>{`
        .max-width-column {
          max-width: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>

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
              <TableCell className='max-width-column text-zinc-500'>
                {moment
                  .utc(job.created_at)
                  .tz(moment.tz.guess())
                  .format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}