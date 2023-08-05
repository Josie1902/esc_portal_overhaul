import StepperView from "@/components/landlord/timeline/timeline"

export default function Timeline({params}) {
    return (
        <section>
            <h1 className="mb-1 text-3xl font-extrabold text-center">ServiceRequestID: {params.id}</h1>
            <StepperView></StepperView>
        </section>
    )
}