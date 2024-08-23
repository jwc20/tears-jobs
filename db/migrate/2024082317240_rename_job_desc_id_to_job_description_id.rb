class RenameJobDescIdToJobDescriptionId < ActiveRecord::Migration[6.1]
  def change
    rename_column :job_skills, :job_desc_id, :job_description_id
  end
end