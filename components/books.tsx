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
    image: "/terrence_cover.png",
    buyLink: "https://www.amazon.com/Terrence-Blood-Lines-Novel/dp/B0CKDL3QZJ"
  }
]

export function Books() {
  // Updated: Single book layout with working Amazon purchase link
  return (
    <section id="books" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-balance">Featured Books</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Dive into the dark and twisted world of Bill Gill&apos;s crime fiction. Each novel is a meticulously crafted psychological thriller that will keep you guessing until the very end.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
                    <Button asChild className="w-full sm:w-auto">
                      <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Purchase on Amazon
                      </a>
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
