export default function Testimonial() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
                <div className="space-y-8">
                    {[
                        {
                            quote: "Lombok masih alami dan tidak seramai Bali!",
                            author: "Andi, Jakarta"
                        },
                        // Add 2 more testimonials
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-lg">
                            <p className="text-lg italic">"{item.quote}"</p>
                            <p className="mt-4 font-medium">— {item.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};