import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { ExternalLink } from "lucide-react"

type Book = {
  title: string
  subtitle: string
  description: string
  cover: string
  amazonUrl: string
  year: string
  series: string
  comingSoon?: boolean
}

const books: Book[] = [
  {
    title: "Terrence",
    subtitle: "A Bill Gill Novel",
    description:
      `When the mutilated body of a young park ranger is discovered at the base of Eagle Tower in Door County, Wisconsin, the quiet tourist haven becomes the hunting ground of a killer who sees his crimes as art.

Told through the voice of Robin Turner, a true-crime podcaster obsessed with understanding the criminal mind, Terrence plunges readers into the psyche of a murderer who believes his grotesque acts elevate him above the "ordinary" masses.

With each carefully staged tableau, Terrence leaves behind more than just bodies — he leaves a message, a challenge, and a calling card carved into the flesh of his victims.`,
    cover: "/terrence_cover.png",
    amazonUrl: "https://a.co/d/8LgME6t",
    year: "2025",
    series: "Blood Lines #1",
  },
  {
    title: "Blood Relatives",
    subtitle: "A Bill Gill Novel",
    description:
      `A dark and riveting thriller where family bonds conceal deadly secrets, and trust can be the most dangerous illusion of all.

When a popular podcaster suddenly disappears, what begins as a simple missing persons case spirals into something far more sinister. Behind the headlines lies a hidden world of obsession, betrayal, and the kind of family history no one wants to inherit.

At the center is a brother and sister bound by blood but divided by secrets. One seeks redemption, the other control—and both are haunted by the shadows of the past. As investigators close in and new lies unravel, the line between love and loyalty blurs, leading to a chilling question: how far would you go to protect family, and how far would blood drag you down?`,
    cover: "/bloodrelativescover.png",
    amazonUrl: "https://a.co/d/2xkFdAv",
    year: "2025",
    series: "Blood Lines #2",
  },
  {
    title: "Seed of Betrayal",
    subtitle: "A Bill Gill Novel",
    description:
      `A woman with no memory. A detective with too many questions. A city about to discover the cost of forgetting who you are.

When a young woman wakes up in a sealed metal container—injured, terrified, and unable to remember her own name—she escapes into a world that feels familiar yet entirely out of reach. Every instinct tells her to stay hidden. Every stranger feels like a threat. And as fragmented flashes of knowledge surface, one thing becomes clear: whoever she was… she can't go back.

Across town, Detective Nate Carter is facing a growing list of inexplicable disappearances and violent crimes with no clear links, no motives, and no suspects. The harder he pulls on the threads, the more tangled the pattern becomes. Someone out there is reinventing themselves—swiftly, intelligently, and without hesitation—and Carter has the sinking feeling he's already a step behind.

As the woman pieces together a new identity and the detective races to decode the emerging trail, their paths move inevitably toward collision. What neither of them knows is that the truth is far more dangerous than the lies they're living.

A tense, gripping psychological thriller about identity, instinct, and the secrets we carry—even when we can't remember them. Perfect for fans of Gillian Flynn, Lisa Gardner, and Alice Feeney.`,
    cover: "/Seed_of_Betrayal_Cover.png",
    amazonUrl: "https://a.co/d/3SFKq3O",
    year: "2025",
    series: "Blood Lines #3",
  },
  {
    title: "Spectre of Death",
    subtitle: "A Bill Gill Novel",
    description:
      `When a retired couple searching for a harmless thrill joins an overnight paranormal investigation at the infamous Weaver Sanatorium, they expect creaking floors and tall tales. What they find instead is far darker.

Once a hospital for the criminally insane—and later a tuberculosis ward where thousands perished—the Weaver is a maze of suffocating corridors, forgotten operating theaters, and shadows that never quite stay still. Whispers echo through the empty wards, footsteps follow when no one is behind you, and some presences seem disturbingly eager to be noticed.

But the living may be more dangerous than the dead.

Among the ten guests are people with secrets, motives, and obsessions—some benign, some deadly. As strange encounters escalate from unsettling to violent, the group begins to unravel. Fear turns to panic when they discover that the doors are no longer an escape, the phones no longer work, and the stories about the Weaver's most terrifying resident—Doctor Wolfgang Goetz—were not exaggerated. The past isn't just haunting the building… it's hunting them.

What begins as a ghost tour becomes a long night of isolation, deception, and survival, where every hallway hides a threat—and every choice may be fatal.

Perfect for fans of atmospheric horror, haunted-institution thrillers, and mysteries where the line between supernatural terror and human evil blurs, Spectre of Death invites readers into a chilling labyrinth where countless souls have entered… and very few have found their way back out.`,
    cover: "/Spectre_of_Death.png",
    amazonUrl: "https://a.co/d/gi1zB95",
    year: "2025",
    series: "Murderous Hauntings #1",
  },
  {
    title: "Spectre of Insanity",
    subtitle: "A Bill Gill Novel",
    description:
      `In the shadow of a long-abandoned sanatorium, trauma never dies—it only waits.

Two years after barely surviving the horrors of the Weaver Sanatorium, Dawn Springer refuses to give up on her best friend Amy, who has retreated deep inside her own mind. But when Amy suddenly whispers a chilling warning—"He is back! He is coming for us"—Dawn realizes their nightmare may not be over.

Across the countryside, a decommissioned hospital is quietly purchased, rebuilt in secrecy, and transformed into a labyrinth of locked rooms, surveillance corridors, and operating theaters no patient should ever enter. Beneath its polished façade lies a purpose more sinister than medicine—and someone with a smile sharp enough to carve his way through the living and the dead.

As a new wave of disappearances, inexplicable violence, and impossible phenomena spreads, a truth long buried claws its way back: some spirits do not rest… and some doctors never stop practicing. What began as one night of terror is spiraling into something far darker, threatening everyone Dawn loves—and reality itself.

Atmospheric, relentless, and fueled by a villain who transcends death, Specter of Insanity pulls readers into a psychological-paranormal thriller where sanity is fragile, fear is rational, and the past refuses to stay buried.

Perfect for fans of The Haunting of Hill House, The Silent Patient, and cinematic slow-burn horror with escalating dread.`,
    cover: "/Spectre_of_Insanity_cover.png",
    amazonUrl: "",
    year: "2025",
    series: "Murderous Hauntings #2",
    comingSoon: true,
  }
]

export function Books() {
  // Updated: Single book layout with working Amazon purchase link
  return (
    <section id="books" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-balance">Available Books</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Dive into the dark and twisted world of Bill Gill&apos;s crime fiction. Each novel is a meticulously crafted psychological thriller that will keep you guessing until the very end.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {books.map((book, index) => (
            <Card key={index} className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="grid md:grid-cols-5 gap-6 p-6">
                <div className="md:col-span-2">
                  <div className="relative aspect-[2/3] overflow-hidden rounded">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-accent">{book.year}</span>
                        <span className="text-xs text-muted-foreground">{book.series}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-1 text-balance">{book.title}</h3>
                      <p className="text-sm font-serif italic text-muted-foreground">{book.subtitle}</p>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{book.description}</p>
                  </div>
                  <div className="pt-4">
                    {book.comingSoon ?? false ? (
                      <Button disabled className="w-full sm:w-auto bg-muted text-muted-foreground cursor-not-allowed">
                        <span>Coming Soon</span>
                      </Button>
                    ) : (
                      <Button asChild className="w-full sm:w-auto">
                        <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                          <span>Purchase on Amazon</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
