class RenameJobDescIdToJobDescriptionIdJobs < ActiveRecord::Migration[7.2]
    def change
      rename_column :jobs, :job_desc_id, :job_description_id
    end
  end