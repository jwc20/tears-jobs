import { fetchData } from '@/api/data';
import { Heading } from '@/components/heading';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import moment from 'moment-timezone';



export const metadata = {
  title: 'Jobs',
};

let current_url = 'api/v0/job_listings';

export default async function Jobs() {
  const data = await fetchData(current_url);
  const jobs = data['data'];
  const prev_url = data['prev_url'];
  const next_url = data['next_url'];
  const currentPage = data['page_url'];
  const totalPages = data['count'];

  const handleNextPage = async () => {
    if (next_url) {
      current_url = next_url;
      window.location.reload();
    }
  };

  const handlePreviousPage = async () => {
    if (prev_url) {
      current_url = prev_url;
      window.location.reload();
    }
  };

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

      <div className="flex items-end justify-between gap-4">
        <Heading>Jobs</Heading>
      </div>

      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Company Name</TableHeader>
            <TableHeader>Job Title</TableHeader>
            <TableHeader>Scraped At</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id} href={job.job_link} title={`Job #${job.id}`}>
              <TableCell>{job.id}</TableCell>
              <TableCell className="max-width-column">{job.company_name}</TableCell>
              <TableCell className="max-width-column">{job.job_title}</TableCell>
              <TableCell className="text-zinc-500">
                {moment.utc(job.created_at).tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between mt-4">
        <button
          disabled={!prev_url}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={!next_url}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
