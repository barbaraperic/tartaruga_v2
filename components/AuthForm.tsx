'use client'
import { register, signin } from '@/lib/api'
import { FormEvent, useCallback, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './AuthForm.module.css'

const registerContent = {
  linkUrl: '/signin',
  linkText: 'Already have an account?',
  header: 'Create a new account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register',
}

const signinContent = {
  linkUrl: '/register',
  linkText: "Don't have an account?",
  header: 'Welcome Back',
  subheader: 'Enter your credentials to access your account',
  buttonText: 'Sign In',
}

const initial = { email: '', password: '', firstName: '', lastName: '' }

export default function AuthForm({ mode }: { mode: 'register' | 'signin' }) {
  const [formState, setFormState] = useState({ ...initial })
  const [error, setError] = useState('')

  const router = useRouter()
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      try {
        if (mode === 'register') {
          await register(formState)
        } else {
          await signin(formState)
        }

        router.replace('/home')
      } catch (e) {
        setError(`Could not ${mode}`)
      } finally {
        setFormState({ ...initial })
      }
    },
    [
      formState.email,
      formState.password,
      formState.firstName,
      formState.lastName,
    ]
  )

  const content = mode === 'register' ? registerContent : signinContent

  return (
    <div>
      <div className={styles['form-wrapper']}>
        <h2 className={styles.header}>{content.header}</h2>
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div className={styles['input-grid']}>
              <div className="">
                <div className={styles.label}>First Name</div>
                <input
                  required
                  placeholder="First Name"
                  value={formState.firstName}
                  className={styles.input}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className="">
                <div className={styles.label}>Last Name</div>
                <input
                  required
                  placeholder="Last Name"
                  value={formState.lastName}
                  className={styles.input}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
            </div>
          )}
          <div className={styles['input-wrapper']}>
            <div className={styles.label}>Email</div>
            <input
              required
              type="email"
              placeholder="Your email"
              value={formState.email}
              className={styles.input}
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className={styles['input-wrapper']}>
            <div className={styles.label}>Password</div>
            <input
              required
              value={formState.password}
              type="password"
              placeholder="Your password"
              className={styles.input}
              onChange={(e) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
          <button className={styles.button} type="submit">
            {content.buttonText}
          </button>
          <span className={styles.link}>
            <Link href={content.linkUrl}>{content.linkText}</Link>
          </span>
        </form>
      </div>
    </div>
  )
}
