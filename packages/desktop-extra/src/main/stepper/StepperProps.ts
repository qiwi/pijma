export default interface StepperProps {
  step: number
  steps: number
  dividerWidth?: number
  onChange?: (step: number) => void
}
