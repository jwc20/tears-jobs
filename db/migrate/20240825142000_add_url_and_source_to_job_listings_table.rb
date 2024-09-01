class AddUrlAndSourceToJobListingsTable < ActiveRecord::Migration[7.2]
    def change
        add_column :job_listings, :source, :text
        add_column :job_listings, :scraped_from, :text
    end
end
