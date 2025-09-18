import {useFilters} from "../../hooks/use-filters.ts";
import {ModelRadioInput} from "../../ui/model-radio-input";

export const ModelRowFilter = () => {

	const {
		filterForm,
		modelRowFilterList,
		updateModelRow
	} = useFilters()

	return (
		<fieldset>
			<legend className='visually-hidden'>Models row select</legend>
			{
				modelRowFilterList.map((modelRowInput) => (
						<ModelRadioInput key={modelRowInput.id}
										 label={modelRowInput.label}
										 value={modelRowInput.value}
										 checked={modelRowInput.value === filterForm.modelRow}
										 onChange={() => {updateModelRow(modelRowInput.value)}}
						/>
					)
				)
			}
		</fieldset>
	)
}