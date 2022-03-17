export type FilterSectionProps = null | 'region' | 'type' | 'shape'

export type FilterSectionsComponentProps = {
  setIsOpen: (value: FilterSectionProps) => void
}
