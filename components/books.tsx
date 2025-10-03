import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { ExternalLink } from "lucide-react"

const books = [
  {
    title: "Blood Relatives",
    subtitle: "Book Two in the Series",
    description:
      `A dark and riveting thriller where family bonds conceal deadly secrets, and trust can be the most dangerous illusion of all.

When a popular podcaster suddenly disappears, what begins as a simple missing persons case spirals into something far more sinister. Behind the headlines lies a hidden world of obsession, betrayal, and the kind of family history no one wants to inherit.

At the center is a brother and sister bound by blood but divided by secrets. One seeks redemption, the other control—and both are haunted by the shadows of the past. As investigators close in and new lies unravel, the line between love and loyalty blurs, leading to a chilling question: how far would you go to protect family, and how far would blood drag you down?`,
    cover: "/bloodrelativescover.png",
    amazonUrl: "",
    year: "2025",
    series: "Blood Lines #2",
    comingSoon: true,
  },
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
                    {book.comingSoon ? (
                      <div className="w-full sm:w-auto">
                        <Button disabled className="w-full sm:w-auto bg-muted text-muted-foreground cursor-not-allowed">
                          <span>Coming Soon</span>
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Available 2025
                        </p>
                      </div>
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
