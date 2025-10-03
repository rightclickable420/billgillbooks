import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded">
            <Image
              src="/billgillportrait.png"
              alt="Bill Gill"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-balance">About the Author</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Bill Gill writes stories that expose the shadows beneath ordinary lives. A retired educator and former business leader, he brings decades of real-world insight into characters who grapple with morality, obsession, and the secrets people fight to keep buried.
              </p>
              <p>
                Raised on a family farm, Gill learned the value of hard work and the quiet power of observation—qualities that later shaped both his teaching and his fiction. After twenty-five years in the corporate world and two decades inspiring students in the classroom, he turned his attention to writing. What began as a challenge soon became a consuming passion: crafting mysteries that are as thoughtful as they are thrilling.
              </p>
              <p>
                Gill&apos;s novels—including <span className="italic">Terrence</span>—delve into the psychology of crime, the legacy of family, and the unsettling truth that darkness often hides in plain sight. Known for intricate plotting and characters that blur the line between victim and predator, his work invites readers into stories that linger long after the final page.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-lg font-serif">
                &quot;Bill Gill doesn&apos;t just tell stories—he unearths them, pulling readers into worlds where the ordinary collides with the extraordinary, and where the deepest mysteries are often found within ourselves.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
