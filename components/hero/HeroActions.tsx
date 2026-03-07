'use client'

import { Button, BUTTON_VARIANTS } from '../ui'

export default function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      <Button
        type="button"
        title="Download App"
        variant={BUTTON_VARIANTS.GREEN}
        onClick={() => (window.location.href = 'https://ash-speed.hetzner.com/100MB.bin')}
      />
      <Button
        type="button"
        title="How we work?"
        icon="/play.svg"
        variant={BUTTON_VARIANTS.WHITE_TEXT}
      />
    </div>
  )
}
