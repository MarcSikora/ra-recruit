import { useRouter } from 'next/router'
import useSwr from 'swr'
import ProductView from '../../components/ProductView'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.slug ? `/api/product/${router.query.slug}` : null,
    fetcher
  )

  if (error) return <div className="center">Failed to load product :(</div>
  if (!data) return <div className="center">Loading...</div>

  return <ProductView product={data} />
}