import StepperView from "@/components/tenant/timeline/timeline"

export default function Timeline({params}) {
    return (
        <section>
            <h1 className="mb-1 text-3xl font-extrabold text-center">ServiceRequestID: {params.id}</h1>
            <StepperView svcid={params.id}></StepperView>
        </section>
    )
}