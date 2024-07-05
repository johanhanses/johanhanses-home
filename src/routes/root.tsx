import { Link } from 'react-router-dom'

export function Root() {
  return (
    <div className="grid h-screen">
      <div className="grid gap-4 place-self-center">
        <h1 className="mb-2 text-center font-serif text-3xl">Johan Hanses</h1>
        <div className="flex flex-col gap-2">
          <Link to="https://github.com/johanhanses" target="_blank" className="hover:text-blue-500 hover:underline">
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/johanhanses/"
            target="_blank"
            className="hover:text-blue-500 hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  )
}
