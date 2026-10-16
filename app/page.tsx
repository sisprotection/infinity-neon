'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Box,
  Check,
  ChevronRight,
  Cpu,
  Crosshair,
  Database,
  Gauge,
  Headphones,
  Menu,
  Monitor,
  Mouse,
  PackageCheck,
  Plus,
  Radio,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

type Product = {
  id: number
  name: string
  code: string
  detail: string
  price: string
  oldPrice: string
  discount: string
  icon: typeof Cpu
  color: string
  tag?: string
}

const products: Product[] = [
  { id: 1, name: 'NOVA//GPU 5090', code: 'NV-5090-24G', detail: '24GB GDDR7 · RAY-TRACE CORE', price: '$1,899', oldPrice: '$2,199', discount: '-14%', icon: Cpu, color: 'pink', tag: 'LOW STOCK' },
  { id: 2, name: 'VOID//DECK PRO', code: 'VDP-OLED-01', detail: 'OLED HDR · 1TB NVME · 32GB RAM', price: '$649', oldPrice: '$799', discount: '-19%', icon: Monitor, color: 'lime', tag: 'BUNDLE READY' },
  { id: 3, name: 'SYNAPSE//KEYS', code: 'SY-KB-MECH', detail: 'HALL EFFECT · 8KHZ POLLING · RGB', price: '$129', oldPrice: '$169', discount: '-24%', icon: Terminal, color: 'violet', tag: 'HOT DROP' },
  { id: 4, name: 'PHANTOM//MOUSE X', code: 'PX-ULTRA-04', detail: '26K DPI · 49G WEIGHT · 80H BATTERY', price: '$89', oldPrice: '$119', discount: '-25%', icon: Mouse, color: 'pink', tag: 'FAST MOVING' },
  { id: 5, name: 'ECHO//STUDIO', code: 'ES-HX-200', detail: 'PLANAR AUDIO · ANC · SPATIAL 3D', price: '$199', oldPrice: '$249', discount: '-20%', icon: Headphones, color: 'lime' },
  { id: 6, name: 'CORE//POWER 1200', code: 'CPX-1200W', detail: 'ATX 3.1 · TITANIUM · MODULAR', price: '$239', oldPrice: '$299', discount: '-20%', icon: Zap, color: 'violet' },
]

const activity = [
  ['14:32:08.441', 'CART_SYNC', '2 ITEMS', 'lime'],
  ['14:32:07.090', 'PRICE_LOCK', 'BUNDLE_04', 'pink'],
  ['14:32:05.772', 'INVENTORY', 'RESERVED', 'lime'],
  ['14:32:02.101', 'SESSION_ID', 'NX-7F4A-91', 'muted'],
  ['14:31:58.640', 'VOLUME_TIER', 'TIER_03', 'violet'],
]

export default function Page() {
  const [cart, setCart] = useState<number[]>([1])
  const [time, setTime] = useState('')
  const [activeTab, setActiveTab] = useState('ALL STOCK')

  useEffect(() => {
    const update = () => setTime(new Date().toISOString().replace('T', ' ').replace('Z', ' UTC'))
    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [])

  const total = useMemo(() => cart.reduce((sum, id) => sum + Number(products.find((p) => p.id === id)?.price.replace(/[$,]/g, '') || 0), 0), [cart])

  function addToCart(id: number) {
    setCart((current) => [...current, id])
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#000] text-white selection:bg-[#ff69b4] selection:text-black">
      <div className="mx-auto min-h-screen max-w-[1600px] border-x border-[#ff69b4]/20 bg-[radial-gradient(circle_at_80%_0%,rgba(87,34,128,.22),transparent_34%),linear-gradient(180deg,#08030d_0%,#000_60%)]">
        <header className="border-b border-[#ff69b4]/30 px-5 py-4 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center border border-[#ff69b4] bg-[#ff69b4]/10 text-[#ff69b4] shadow-[0_0_18px_rgba(255,105,180,.25)]"><Crosshair /></div>
              <div><p className="font-mono text-[10px] tracking-[.28em] text-[#32cd32]">NEXUS RETAIL SYSTEMS // 09</p><h1 className="text-xl font-black uppercase tracking-tight sm:text-2xl">Infinity Neon <span className="text-[#ff69b4]">Matrix</span></h1></div>
            </div>
            <div className="hidden items-center gap-7 font-mono text-[10px] tracking-[.18em] text-white/50 md:flex"><span className="text-[#32cd32]">● SYSTEM ONLINE</span><span>OCT 15 // 2026</span><span>US / EAST-01</span></div>
            <button aria-label="Open menu" className="border border-white/15 p-2 text-white/70 md:hidden"><Menu /></button>
          </div>
        </header>

        <section className="border-b border-[#ff69b4]/20 px-5 py-8 lg:px-8 lg:py-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl"><div className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[.24em] text-[#ff69b4]"><span className="h-px w-12 bg-[#ff69b4]" /> BLACK FRIDAY PROTOCOL // ACTIVE</div><h2 className="text-5xl font-black uppercase leading-[.85] tracking-[-.07em] sm:text-7xl lg:text-[7.5rem]">Acquire<br /><span className="text-[#ff69b4] [text-shadow:0_0_28px_rgba(255,105,180,.45)]">the edge.</span></h2></div>
            <div className="max-w-xs border-l border-[#32cd32]/50 pl-4 font-mono text-xs leading-relaxed text-[#32cd32]/80"><p className="mb-3 flex items-center gap-2"><Radio className="size-3 animate-pulse" /> LIVE PROCUREMENT FEED</p><p>Direct access to precision hardware, priority bundles, and matrix-level volume pricing. No noise. No friction.</p></div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px border border-[#ff69b4]/25 bg-[#ff69b4]/25 sm:grid-cols-4"><Stat label="ACTIVE DROPS" value="24" /><Stat label="UNITS MOVING" value="8,492" /><Stat label="AVG. SAVING" value="21.8%" /><Stat label="CART WINDOW" value="09:41" accent /></div>
        </section>

        <div className="grid lg:grid-cols-[1fr_340px]">
          <section className="border-b border-[#ff69b4]/20 lg:border-b-0 lg:border-r">
            <div className="flex flex-col gap-4 border-b border-[#ff69b4]/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><p className="font-mono text-[10px] tracking-[.25em] text-white/40">01 / PROCUREMENT INTERFACE</p><h3 className="mt-1 text-lg font-bold uppercase tracking-tight">Select your loadout</h3></div><div className="flex gap-1 overflow-auto font-mono text-[10px] text-white/50">{['ALL STOCK', 'HARDWARE', 'BUNDLES'].map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`whitespace-nowrap border px-3 py-2 transition ${activeTab === tab ? 'border-[#ff69b4] bg-[#ff69b4]/10 text-[#ff69b4]' : 'border-white/10 hover:border-white/30'}`}>{tab}</button>)}</div></div>
            <div className="grid gap-px bg-[#ff69b4]/20 sm:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} inCart={cart.includes(product.id)} onAdd={() => addToCart(product.id)} />)}</div>
          </section>

          <aside className="bg-[#10091a]/80">
            <div className="border-b border-[#ff69b4]/20 px-5 py-5"><p className="font-mono text-[10px] tracking-[.25em] text-white/40">02 / LOCAL SESSION LEDGER</p><div className="mt-2 flex items-center justify-between"><h3 className="text-lg font-bold uppercase">Audit stream</h3><span className="flex items-center gap-2 font-mono text-[10px] text-[#32cd32]"><span className="size-1.5 animate-pulse rounded-full bg-[#32cd32]" /> LOCAL ONLY</span></div></div>
            <div className="p-5 font-mono text-[10px]"><div className="mb-5 border border-[#32cd32]/25 bg-black/50 p-4"><div className="mb-3 flex justify-between text-white/40"><span>SESSION CLOCK</span><span className="text-[#32cd32]">ROLLING</span></div><p className="break-all text-sm text-[#32cd32]">{time || 'INITIALIZING...'}</p><div className="mt-3 h-1 bg-[#32cd32]/10"><div className="h-full w-2/3 bg-[#32cd32] shadow-[0_0_8px_#32cd32]" /></div></div><div className="flex flex-col gap-4">{activity.map(([stamp, event, value, color]) => <div key={stamp} className="grid grid-cols-[90px_1fr_auto] gap-2 border-b border-white/5 pb-3 text-[9px]"><span className="text-white/30">{stamp}</span><span className={color === 'lime' ? 'text-[#32cd32]' : color === 'pink' ? 'text-[#ff69b4]' : color === 'violet' ? 'text-[#a855f7]' : 'text-white/40'}>{event}</span><span className="text-white/60">{value}</span></div>)}</div><div className="mt-6 border border-[#ff69b4]/35 bg-[#ff69b4]/5 p-4"><div className="flex items-center gap-2 text-[#ff69b4]"><ShieldCheck className="size-4" /><span className="tracking-[.15em]">SAFE SESSION MODE</span></div><p className="mt-2 leading-relaxed text-white/45">Cart metadata is held in volatile session memory. No account or database required.</p></div></div>
            <div className="border-t border-[#ff69b4]/20 p-5"><div className="mb-4 flex items-center justify-between font-mono text-xs"><span className="text-white/50">QUEUE TOTAL / {cart.length} UNITS</span><span className="text-xl font-bold text-[#32cd32]">${total.toLocaleString()}</span></div><button className="flex w-full items-center justify-between bg-[#ff69b4] px-4 py-3 text-left font-mono text-xs font-bold tracking-[.12em] text-black transition hover:bg-white"><span>INITIATE CHECKOUT</span><ArrowUpRight className="size-4" /></button></div>
          </aside>
        </div>
        <footer className="flex flex-col justify-between gap-3 border-t border-[#ff69b4]/20 px-5 py-5 font-mono text-[10px] tracking-[.16em] text-white/35 sm:flex-row lg:px-8"><span>© 2026 INFINITY NEON // ALL SYSTEMS NOMINAL</span><span className="flex items-center gap-2"><Database className="size-3" /> ZERO DATABASE OVERHEAD <span className="text-[#32cd32]">✓</span></span></footer>
      </div>
    </main>
  )
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) { return <div className="bg-black/70 p-4 sm:p-5"><p className="font-mono text-[9px] tracking-[.2em] text-white/40">{label}</p><p className={`mt-1 text-2xl font-bold tracking-tight ${accent ? 'text-[#ff69b4]' : 'text-[#32cd32]'}`}>{value}</p></div> }

function ProductCard({ product, inCart, onAdd }: { product: Product; inCart: boolean; onAdd: () => void }) { const Icon = product.icon; return <article className="group bg-[#0b0610] p-5 transition hover:bg-[#160b1e] sm:p-6"><div className="mb-8 flex items-start justify-between"><div className={`flex size-11 items-center justify-center border ${product.color === 'pink' ? 'border-[#ff69b4]/50 text-[#ff69b4]' : product.color === 'lime' ? 'border-[#32cd32]/50 text-[#32cd32]' : 'border-[#a855f7]/50 text-[#a855f7]'}`}><Icon /></div><span className="font-mono text-[9px] text-white/30">0{product.id} / 06</span></div><div className="mb-5 h-16"><h4 className="text-lg font-bold uppercase leading-none tracking-tight">{product.name}</h4><p className="mt-2 font-mono text-[9px] tracking-[.15em] text-white/40">{product.code}</p></div><div className="mb-5 border-t border-white/10 pt-3 font-mono text-[9px] text-white/45"><p>{product.detail}</p></div><div className="flex items-end justify-between"><div><span className="font-mono text-[10px] text-[#32cd32]">{product.discount}</span><div className="mt-1 flex items-baseline gap-2"><strong className="text-2xl">{product.price}</strong><del className="font-mono text-[10px] text-white/30">{product.oldPrice}</del></div></div><button aria-label={`Add ${product.name} to cart`} onClick={onAdd} disabled={inCart} className={`flex size-9 items-center justify-center border transition ${inCart ? 'border-[#32cd32] bg-[#32cd32] text-black' : 'border-[#ff69b4]/60 text-[#ff69b4] hover:bg-[#ff69b4] hover:text-black'}`}>{inCart ? <Check /> : <Plus />}</button></div>{product.tag && <div className="mt-5 flex items-center gap-2 font-mono text-[9px] tracking-[.15em] text-white/35"><span className={`size-1.5 rounded-full ${product.color === 'lime' ? 'bg-[#32cd32]' : 'bg-[#ff69b4]'}`} />{product.tag}</div>}</article> }

