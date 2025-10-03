import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const books = [
  {
    title: "Terrence",
    subtitle: "A Blood Lines Novel",
    description:
      "When the mutilated body of a young park ranger is discovered at the base of Eagle Tower in Door County, Wisconsin, Detective Sarah Cross finds herself drawn into a chilling game of cat and mouse with a killer who leaves behind cryptic messages written in blood. As the body count rises, Sarah must confront her own traumatic past while racing against time to decipher the killer's twisted philosophy before she becomes his next victim.",
    image: "/terrence-cover.svg",
    buyLink: "#"
  },
  {
    title: "The Midnight Collector",
    subtitle: "A Detective Sarah Cross Novel",
    description:
      "When bodies start appearing with cryptic messages carved into their skin, Detective Sarah Cross is called in to investigate what appears to be the work of a serial killer with an artistic flair. As Sarah delves deeper into the case, she discovers that the killer is collecting 'trophies' from each victim and leaving behind clues that suggest a pattern connected to unsolved cases from decades past.",
    image: "/shadow-of-the-reaper-cover.svg",
    buyLink: "#"
  }
]

export function Books() {
  return (
    <section id="books" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-balance">Featured Books</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Dive into the dark and twisted world of Bill Gill&apos;s crime fiction. Each novel is a meticulously crafted psychological thriller that will keep you guessing until the very end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <Card key={index} className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/3 lg:w-1/4">
                  <Image
                    src={book.image}
                    alt={`${book.title} cover`}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover md:aspect-[3/4]"
                  />
                </div>
                <div className="md:w-2/3 lg:3/4 p-6 lg:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2">{book.title}</h3>
                      <p className="text-accent font-medium mb-4">{book.subtitle}</p>
                    </div>
                    <p className="text-foreground/80 leading-relaxed line-clamp-4">
                      {book.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full sm:w-auto">
                      <ExternalLink size={16} className="mr-2" />
                      Purchase Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
