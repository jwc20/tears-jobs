class CreateJobDescriptions < ActiveRecord::Migration[7.2]
  def change
    create_table :job_descriptions do |t|
      t.text :description
      t.integer :job_id
      t.integer :job_skill_id

      t.timestamps
    end
  end
end
