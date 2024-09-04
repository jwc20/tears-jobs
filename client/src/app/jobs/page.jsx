
import { fetchData } from '@/api/data'
import JobsTable from './JobsTable'
import JobsPagination from './JobsPagination'

export const metadata = {
  title: 'Jobs'
}

export default async function Jobs({ searchParams }) {
  const currentPage = parseInt(searchParams.page) || 1
  const data = await fetchData(`api/v0/job_listings?page=${currentPage}`)
  const jobs = data['data']
  const totalPages = Math.ceil(data['count'] / 10)

  return (
    <>
      <div className='flex items-end justify-between gap-4'>
        <h1 className="text-2xl font-bold">Jobs</h1>
      </div>

      <JobsTable jobs={jobs} />

      <div className='mt-8'>
        <JobsPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  )
}