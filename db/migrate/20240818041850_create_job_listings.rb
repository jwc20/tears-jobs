class CreateJobListings < ActiveRecord::Migration[7.2]
  def change
    create_table :job_listings do |t|
      t.string :job_title
      t.string :job_link
      t.integer :job_description_id
      t.integer :company_id

      t.timestamps
    end
  end
end
