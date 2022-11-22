import Users from './users'

export default function UsersPage() {
  return (
    <section>
      <div className='center py-14 text-center'>
        <h1 className='text-5xl font-bold tracking-tight'>
            Users Page
        </h1>
        <Users />
      </div>
    </section>
  )
}