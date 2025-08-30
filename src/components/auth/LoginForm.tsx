import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

interface LoginFormData {
  username: string
  password: string
}

export function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    if (formData.username.length < 5) {
      setError('아이디는 5글자 이상이어야 합니다.')
      return false
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/
    if (!passwordRegex.test(formData.password)) {
      setError('비밀번호는 대소문자와 특수문자를 포함해야 합니다.')
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        router.push('/')
      } else {
        setError('로그인에 실패했습니다.')
      }
    } catch (err) {
      setError('서버 연결에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h2 className="text-3xl font-bold text-center">로그인</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="username"
              type="text"
              placeholder="아이디"
              value={formData.username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, username: e.target.value })}
              required
            />
            <Input
              id="password"
              type="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 