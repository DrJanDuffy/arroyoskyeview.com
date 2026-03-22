'use client'

import { useState } from 'react'
import { RefreshCw, ExternalLink, Key } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ApiKeyError() {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = async () => {
    setIsRetrying(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center text-card-foreground shadow-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/15">
          <Key className="h-8 w-8 text-destructive" aria-hidden />
        </div>

        <h1 className="mb-4 text-2xl font-bold text-foreground">API Key Required</h1>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          To use this app, you need to configure your v0 API key. You can get one from v0.dev and set it as an environment variable.
        </p>

        <div className="mb-6 rounded-lg border border-border bg-muted/50 p-4 text-left">
          <h3 className="mb-2 font-semibold text-foreground">Setup Instructions:</h3>
          <ol className="space-y-1 text-sm text-muted-foreground">
            <li>
              1. Get your API key from{' '}
              <span className="rounded bg-muted px-1 font-mono text-foreground">v0.dev/settings</span>
            </li>
            <li>
              2. Create a <span className="rounded bg-muted px-1 font-mono text-foreground">.env.local</span> file
            </li>
            <li>
              3. Add:{' '}
              <span className="rounded bg-muted px-1 font-mono text-foreground">V0_API_KEY=your_key_here</span>
            </li>
            <li>4. Restart the development server</li>
          </ol>
        </div>

        <div className="space-y-3">
          <Button
            type="button"
            onClick={handleRetry}
            disabled={isRetrying}
            className={cn('w-full gap-2', isRetrying && 'cursor-not-allowed')}
          >
            {isRetrying ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" aria-hidden />
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4" aria-hidden />
                I&apos;ve Added the API Key
              </>
            )}
          </Button>

          <Button type="button" variant="secondary" className="w-full gap-2" asChild>
            <a href="https://v0.dev/settings" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" aria-hidden />
              Get API Key from v0.dev
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Need help? Check the README.md file for detailed setup instructions.
        </p>
      </div>
    </div>
  )
}
