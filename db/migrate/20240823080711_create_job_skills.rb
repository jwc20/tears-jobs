class CreateJobSkills < ActiveRecord::Migration[7.2]
  def change
    create_table :job_skills do |t|
      t.text :skills
      t.integer :job_desc_id

      t.timestamps
    end
  end
end
